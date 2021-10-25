const data = dataJson();

function dataJson() {
  let array = [];
  for (let i = 1; i <= 10; i++) {
     let data = {
       id: i,
       nombreProceso: 'Proceso ' + i,
       nombreUsuario: 'Usuario ' + i,
       descripcion: 'Descripci&oacute;n '+ i
     };
     array.push(data);
  }
  return array;
}

$(document).ready(function() {
  construir_tabla(data);
  $('#btn_modal_registrar').off('click').on('click', function (){
     $('#register_modal').modal('show');
  });
  $('#btn_registrar').off('click').on('click', function (){
    if (validar_datos()) {
      Lobibox.alert('success', {msg:'Se ha registrado la informaci&oacute;n correctamente.'});
      $('#register_modal').modal('hide');
    } else {
      Lobibox.alert('error',{msg:'Ha ocurrido un error intentelo de nuevo'});
    } 
  });

  $('#register_modal').on('hidden.bs.modal', function (e) {
    $('#formulario_registro').trigger("reset");
  })

function construir_tabla(data){
$('#tabla-listado').bootstrapTable({
    data:data,
    pageSize : 5,
    columns : [{
          field:'id',
          title : 'Id',
          align : 'center',
          sortable : true
          },
          {
          field:'nombreProceso',
          title : 'Nombre proceso',
          align : 'center',
          sortable : true
          },
          {
           field:'nombreUsuario',
           title : 'Usuario',
           align : 'center',
          },
          {
          field:'descripcion',
          title : 'Descripci&oacute;n',
          align : 'center',
          },
          {
           title : 'Acciones',
           align : 'center',
           sortable : true,
           align : 'center',
          formatter : function(value, row,index) {
             return ['<a class="accion"> <span class="glyphicon glyphicon-search consultar" aria-hidden="true" "title="Consultar">'];
          }
          }],
             onAll: function(name,args){
                    $('.consultar').off('click').on('click', function (){
                    $('#consulta_modal').modal('show');
                        $('#nombre_proceso_consulta').val('Informacion del registro');
                        $('#descripcion_consulta').val('Informacion del registro');
                        $('#fecha_inicio_consulta').val('Informacion del registro');
                        $('#fecha_termino_consulta').val('Informacion del registro');
                    });
                  }
      });
  }
  
  function validar_datos() {
    if(!$('#nombre_proceso').val() || !$('#descripcion').val() || !$('#fecha_inicio').val() || !$('#fecha_termino').val() ||
       !$('#select_estatus').val()) return false;

    return true;
  }
});
