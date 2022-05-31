# Final Project CS:GO Skins SPA
This is a <a target="_blank" href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/">Counter-strike:Global Offensive</a> skins web store made with Angular framework.
### *Technologies Used:*

<table>
<tbody>
	<tr>
		<td>Front-End</td>
		<td>Angular, HTML5, CSS3, Bootstrap</td>
	</tr>
	<tr>
		<td>Back-End</td>
		<td>ASP.NET Core</td>
	</tr>
  <tr>
		<td>Object-Relational Mapping</td>
		<td>Entity Framework Core</td>
	</tr>
	<tr>
		<td>Database</td>
		<td>PostgreSQL</td>
	</tr>
  	<tr>
		<td>Miscellaneous</td>
		<td>PayPal Payments</td>
	</tr>
</tbody>
</table>


## Instructions

Make sure you have PostgreSQL and PgAdmin4.

In PgAdmin4 make a new database called preferably csskins (update DefaultConnection if database name is not csskins).

Inside the API folder go to `appsettings.json` and change the postgreSQL username and password accordingly to your postgreSQL credentials.

First if you run the project on vscode you should open two terminals, cd into API and into client.

When in the client folder please run `npm install` to install all projects dependent packages.

After all installed run `ng serve` inside the client folder and now open up the second terminal where API is open and run `dotnet watch run`.

Now you can navigate to `http://localhost:4200`.

#
Register as a new user or login to view all products.

You can filter all products by minimum price to maximum price, and search an item by its name.

As a user you can add as many products that you want to your cart.

You can pay for all items in cart via PayPal payment or by 'checkout'. (בבקשה לבצע בדיקה גם על checkout)

As a user you can edit all your contact info including credit card info in the "My Profile" Tab or delete your credit card.

Password reset will be available only after the user inserted the right code. The random code will be sent to the user email address or scan the QR code to recive the code, only then you would be able to change password.

### ***User***

can make an order, add a credit card, edit personal info, edit credit card info, change password and delete credit card.

### ***Admin*** 

can add a new product, edit any product, delete any product, delete any user, delete any order.



# Products Page

![fp0](https://user-images.githubusercontent.com/80118008/168890559-cbe5d079-0b7e-4599-8677-7cc64d147961.PNG)


![fp1](https://user-images.githubusercontent.com/80118008/168890570-41998b33-053f-4deb-8b74-f528d8d5abf3.PNG)
"Similar Products" will display random products each refresh or when redirecting to a new product.

#

You can remove an item from your cart and the total price will be updated accordingly.

![fp2](https://user-images.githubusercontent.com/80118008/168890947-53f3bbc5-d658-4c74-9f34-f81b32b5ff63.PNG)

# My Profile


You can edit all your contact info including credit card info (only if you have added a card to your account).

![_01](https://user-images.githubusercontent.com/80118008/170431200-84a24503-a7b7-444e-a0da-1993ef3de569.PNG)
#
![_04](https://user-images.githubusercontent.com/80118008/170431402-488f17c3-82a9-4325-ae6b-7c5d9fec406b.PNG)


***If you added a card to your account, you can edit info or delete the card from your account.***

![_02](https://user-images.githubusercontent.com/80118008/170431300-62bf4c86-46da-4332-9d17-64f823be8f9b.PNG)
#
![_03](https://user-images.githubusercontent.com/80118008/170431362-b5fc225e-d829-4a21-afd0-b787e76cd39f.PNG)



### Password Reset

You can reset your password by validating your email address.

if valid an email will be sent via SMTP or you can scan the QR code.

![fp7](https://user-images.githubusercontent.com/80118008/168891173-ab5ac012-9508-4d65-ab54-adcd1e09201d.PNG)

![fp8](https://user-images.githubusercontent.com/80118008/168891183-7403c93d-b6a2-4e96-b452-761b55584575.PNG)


# Admin GUI

The admin user is allowed to add an new product into Products table in the database,

Can easily edit any product by clicking "Edit Product" and you will be prompted to the admin product edit page.

If you click on a product it will not direct you to the normal product page, it will display the product but with an edit or delete product buttons.

![fpa0](https://user-images.githubusercontent.com/80118008/168891375-f8898e31-f3e4-4c68-8c64-d3d3276dc6d3.PNG)

![fpa2](https://user-images.githubusercontent.com/80118008/168891585-71dc8be8-c2f5-4a82-9808-8babe48c5043.PNG)

![fpa1](https://user-images.githubusercontent.com/80118008/168891735-dcb4905d-5a13-4d82-a7ea-403ad1a6744b.PNG)

## Adding a new product
![fpa3](https://user-images.githubusercontent.com/80118008/168891798-4de03274-f842-4b5e-86da-c1fbe378f78f.PNG)
![fpa4](https://user-images.githubusercontent.com/80118008/168891822-c0f7b96d-74ae-43e2-a1de-6fb14988cabc.PNG)
