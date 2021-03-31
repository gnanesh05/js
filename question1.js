var arr =  [1,1,2,2,4,4,4,4,5];
function sort(ans)
{
  return Object.entries(ans).sort((a,b) => b[1]-a[1]);
}
function duplicate(arr)
{
   var ans={};
   for(var i=0; i<arr.length; i++)
   {
   	if(ans[arr[i]])
   		ans[arr[i]]++;
   	else
   		ans[arr[i]] =1;
   }
   result = sort(ans);
   var final=[];
   final[0]=result[0]
   final[1]=result[result.length-1];
   return final
}

console.log(duplicate(arr));
