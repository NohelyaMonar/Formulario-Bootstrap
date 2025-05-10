function mostrarValores() {
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const cedula = document.getElementById('cedula').value;
            const fechaNacimiento = document.getElementById('fechaNacimiento').value;
            const horaNacimiento = document.getElementById('horaNacimiento').value;
            const edad = document.getElementById('edad').value;
            const paisNacimiento = document.getElementById('paisNacimiento').value;
            const correo = document.getElementById('correo').value;
            const contraseña = document.getElementById('contraseña').value;
            const materiaFavorita = document.getElementById('materiaFavorita').value;
            const comentario = document.getElementById('comentario').value;

            const genero = document.querySelector('input[name="genero"]:checked');
            const generoValor = genero ? genero.value : 'No seleccionado';
            
            const interesesSeleccionados = [];
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                if (checkbox.checked) {
                    interesesSeleccionados.push(checkbox.value);
                }
            });

            const resultado = `
Nombre: ${nombre}
Apellido: ${apellido}
Cédula: ${cedula}
Fecha de Nacimiento: ${fechaNacimiento}
Hora de Nacimiento: ${horaNacimiento}
Edad: ${edad}
País de Nacimiento: ${paisNacimiento}
Correo: ${correo}
Contraseña: ${contraseña ? '********' : 'No ingresada'}
Género: ${generoValor}
Materia Favorita: ${materiaFavorita}
Intereses: ${interesesSeleccionados.join(', ') || 'Ninguno'}
Comentario: ${comentario}
            `;

            document.getElementById('resultado').textContent = resultado.trim();
        }