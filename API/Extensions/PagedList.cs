using System.Linq;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace API.Helpers
{
    //1. make generic, can take any type of entity, on compile time
    //2. it's a type of list so we'll inherit from List<T>
    public class PagedList<T> : List<T>
    {
        //4. create a constructor
        public PagedList(
        /*the items we get from our query*/IEnumerable<T> items, 
        int count, 
        int pageNumber, 
        int pageSize
        )
        {
            this.CurrentPage = pageNumber;
            // if count is 7 and pageSize is 5, then we have 2 pages
            // question: why the (float)?
            // answer: Ceiling need a float number, divide by float number will return a float number
            this.TotalPages = (int) Math.Ceiling(count / (float) pageSize);
            this.PageSize = pageSize;
            this.TotalCount = count;
            AddRange(items); // so have actual access to the items 😅

        }
        //3. create properits
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }//total pages
        public int PageSize { get; set; }

        // total number of items in this query (based on our query before slicing by pages)
        public int TotalCount { get; set; }


        //5. create a static method we can call from anywhere
        //  * this method will return a paged list from a query
        //  * we'll see how it woks, don;t worry about this moo much now
        public static async Task<PagedList<T>> CreateAsync(
            IQueryable<T> source, // the source data
            int pageNumber,
            int pageSize)
        {
            // unfortunately we have to do this, this is unavoidable, because the count >= what we return in the end
            var count = await source.CountAsync(); 
            var items = await source
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

            return new PagedList<T>(items, count, pageNumber, pageSize);
        }
        //6. now this looks a bit odd, static method in a non static class that builds an in stance of that class.
        //  * but folowing the pattern, we'll see how it works
        //  * bear with me as I create other helpers we need,
        //7. back to the README.md
    }
}