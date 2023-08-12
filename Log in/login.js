document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
  
    const usuariosPredeterminados = [
      { username: "usuario1", password: "123" },
      { username: "usuario2", password: "123" },
      { username: "usuario3", password: "123" }
    ];
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = loginForm.username.value;
      const password = loginForm.password.value;
  
      // Verificacion
      const usuarioEncontrado = usuariosPredeterminados.find(usuario => usuario.username === username && usuario.password === password);
  
      if (usuarioEncontrado) {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de Sesión Exitoso',
          text: '¡Bienvenido, ' + username + '!',
          timer: 2000, 
          showConfirmButton: false
        }).then(() => {
          window.location.href = "../index.html"; 
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Credenciales Incorrectas',
          text: 'Usuario o contraseña incorrectos. Intente nuevamente.',
        });
      }
    });
  });
  
  
  