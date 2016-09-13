var records=[{
  from:"Tim"
  to:"Jerry"
  };

{ from:"Elaine"
  to:"Tim"
  }
]
for (var i=0; i<records.length;i++){
      var flag=false;
      for ( var j=0;j<records.length,j++){
        if(records[i].to == records[j]from){
          flag= true;
          break;
        }
      }
  if(flag == false){
    console.log(records[i].to);
    break;
  }
};
