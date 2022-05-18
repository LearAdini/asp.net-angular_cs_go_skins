# Final Project CS:GO Skins SPA

This is a <a target="_blank" href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/">Counter-strike:Global Offensive</a> skins web store made with Angular framework.

You can register as a new user and login to view all products.

You can filter all products by minimum item price to maximum price and you can also find an item by searching its name.

As a new user you can add each product to your cart and checkout via PayPal or by the store checkout.

A user can edit all his contact info including his credit card info in the "My Profile" Tab.

Password reset will be avilable only after the user inserted the right code. The random code will be sent to the user email address or scan the QR code to recive the code, only then he would be able to reset his password.

A user can view all his orders.

All CRUD operations are allowed while logged in as an admin.



https://drop-shipping-angular.herokuapp.com
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
		<td>PayPal Payments, Social Login</td>
	</tr>
</tbody>
</table>

# Products Page

Products page is only accessible when beeing logged in.

You can buy each product individually or add it to your cart via PayPal payments.


![fp0](https://user-images.githubusercontent.com/80118008/168890559-cbe5d079-0b7e-4599-8677-7cc64d147961.PNG)


![fp1](https://user-images.githubusercontent.com/80118008/168890570-41998b33-053f-4deb-8b74-f528d8d5abf3.PNG)
The "Similar Products" will display random products each refresh or when redirecting to a new product.



You can remove an item from your cart and the total price will be updated accordingly.


![fp2](https://user-images.githubusercontent.com/80118008/168890947-53f3bbc5-d658-4c74-9f34-f81b32b5ff63.PNG)

# My Profile


You can edit all your contact info including credit card info in.

![fp4](https://user-images.githubusercontent.com/80118008/168891029-a3e4ce1a-d70c-43ba-ad6c-e3859dec70db.PNG)

![fp5](https://user-images.githubusercontent.com/80118008/168891139-15d3aed5-9434-4d4b-a206-4536686ff825.PNG)

![fp6](https://user-images.githubusercontent.com/80118008/168891146-587f7790-ff97-4b06-9c76-52490f9c03b6.PNG)


### Password Reset

You can reset your password by validating your email address.

if valid an email will be sent via SMTP or you can scan the QR code.

![fp7](https://user-images.githubusercontent.com/80118008/168891173-ab5ac012-9508-4d65-ab54-adcd1e09201d.PNG)

![fp8](https://user-images.githubusercontent.com/80118008/168891183-7403c93d-b6a2-4e96-b452-761b55584575.PNG)


# Admin GUI

The admin user is allowed to add an new product into Products table in the database,

Can easily edit any product by clicking "Edit Product" and you will be prompted to the admin product edit page.

![fpa0](https://user-images.githubusercontent.com/80118008/168891375-f8898e31-f3e4-4c68-8c64-d3d3276dc6d3.PNG)

![fpa2](https://user-images.githubusercontent.com/80118008/168891585-71dc8be8-c2f5-4a82-9808-8babe48c5043.PNG)

As an admin if you click on one of the products dispalyed it will not direct you to the normal product page,

it will display the product but with an edit or delete product buttons.
![fpa1](https://user-images.githubusercontent.com/80118008/168891735-dcb4905d-5a13-4d82-a7ea-403ad1a6744b.PNG)

Adding a new product
![fpa3](https://user-images.githubusercontent.com/80118008/168891798-4de03274-f842-4b5e-86da-c1fbe378f78f.PNG)
![fpa4](https://user-images.githubusercontent.com/80118008/168891822-c0f7b96d-74ae-43e2-a1de-6fb14988cabc.PNG)
