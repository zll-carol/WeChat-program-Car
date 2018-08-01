const parseObjToQuery=function(obj){ //将对象转为query
  let str="";
  for(let key in obj){   //obj[key]即每个key对应的值
    str+=key  +"="+obj[key]+"&";
  }
  return str.substr(0,str.length-1);  //substr ——>截取字符串，将最后一个&去掉
}

module.exports=parseObjToQuery;