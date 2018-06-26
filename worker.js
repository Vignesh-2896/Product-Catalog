function examine(id)
{
	var promise = new Promise(function(resolve,reject)
	{
		if(id> 0 && id <= 100)
			resolve(id);
		else
			reject("ID Does Not Exist. Try Again.");
	});
	var promise2 = promise.then(function(result)
	{
	document.getElementById("product_id").innerHTML = document.getElementById(id).id;
	document.getElementById("product_price").innerHTML = document.getElementById("price_"+result).innerHTML;
	document.getElementById("product_type").innerHTML = document.getElementById("type_"+result).innerText;
	return result;
	});
	promise2.then(function(result)
	{
		deletesimilar();
		for (var i = 1 ; i<=100; i++)
		{
			if(i != result)
			{
				if(document.getElementById("type_"+result).innerHTML == document.getElementById("type_"+i).innerHTML)
				{
					similar(i);
				}
			}
		}
	});
}
function search()
{
	var promise = new Promise(function(resolve,reject)
	{
		var id_val = document.getElementById("search_bar").value;
		if(id_val > 0 && id_val<=100)
			resolve(id_val);
		else
			reject("Failure");
	});
	
	var promise2 = promise.then(function(result){
		return result;
	}).catch(function(err)
	{
		alert("ID Does not Exist. Try Again");
	});
	promise2.then(function(result)
	{
		examine(result);
	});
}
function similar(id_val)
{	
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	var td4 = document.createElement("td");
	var td_button = document.createElement("button");
	
	tr.setAttribute("id",id_val);
	td1.innerHTML = id_val;
	td2.innerHTML = document.getElementById("type_"+id_val).innerHTML;
	td3.innerHTML = document.getElementById("price_"+id_val).innerHTML;
	td_button.innerHTML ="Examine";
	td_button.setAttribute("onclick","examine("+id_val+")");
	
	td4.appendChild(td_button);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);	

	document.getElementById("list_prod_sim").appendChild(tr);
}
function deletesimilar()
{
	var list_prod_sim  = document.getElementById("list_prod_sim");
	while(list_prod_sim.firstChild)
		list_prod_sim.removeChild(list_prod_sim.firstChild);
	
	var tr = document.createElement("tr");
	var th1 = document.createElement("th");
	var th2 = document.createElement("th");
	var th3 = document.createElement("th");
	var th4 = document.createElement("th");
	th1.innerHTML = "Product ID";
	th2.innerHTML = "Product Type";
	th3.innerHTML = "Product Price";
	th4.innerHTML = "Examine";
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	tr.appendChild(th4);
	document.getElementById("list_prod_sim").appendChild(tr);
}