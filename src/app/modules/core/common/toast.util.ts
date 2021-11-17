import Swal, { SweetAlertIcon } from 'sweetalert2'
export class ToastUtil {


  static show(type: string, title: string, body: string = '') {
    var icon: SweetAlertIcon;
    switch (type) {
      case 'error':
        icon = 'error';
        break;
      case 'success':
        icon = 'success';
        break;
      case 'warning':
        icon = 'warning';
        break;
    }
    
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: icon!,
      title: title,
      html: body
    });
  }
  static technicalError(title:string, message:string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 10000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
    Toast.fire({
      icon: 'error',
      title: title,
      html: message
    });
    //Swal.fire({
    //  icon: 'error',
    //  title: title,
    //  html: message,
    //  timer: 10000,
    //  timerProgressBar: true,
    //});
  }

}
