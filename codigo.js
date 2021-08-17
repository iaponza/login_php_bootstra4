$('#formlogin').submit(function(e){
    e.preventDefault(); //evirtar comportamiento por default que seria recargar la pagina
   var usuario = $.trim ($("#usuario").val()); //limpiar los campos
   var password = $.trim ($("#password").val());
   
   if(usuario.length == "" || password == ""){
      Swal.fire({
         type:'warning',
         title:'Debe ingresar un usuario y/o contraseña',
      });
      return false;
   }else{
      $.ajax({
         url:"bd/login.php", //envio de datos
         type:"post",
         datatype:"json",
         data:{usuario:usuario, password:password},
         success:function(data){
            if(data == "null"){
               Swal.fire({
                  type:'error',
                  title:'Usuario y/o password incorrecto'
               });
            }else{
               Swal.fire({
                  type:'success',
                  title:"¡Conexion exitosa",
                  confirmButtonColor:'#3985d6',
                  confirmButtonText:'Ingresar'
               }).then((result) => { //captura del resultado y redirecciona a otra pagina. pag_inicio
                  if(result.value){
                     window.location.href = "vistas/pag_inicio.php";
                  }
               })
            }
         }
      });
   }

});