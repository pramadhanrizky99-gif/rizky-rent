
const rizky_menu=document.getElementById('rizky_menu');
const rizky_nav=document.getElementById('rizky_nav');
if(rizky_menu&&rizky_nav){rizky_menu.addEventListener('click',()=>{rizky_nav.classList.toggle('rizky_show');});}
const rizky_form=document.getElementById('rizky_contact_form');
if(rizky_form){rizky_form.addEventListener('submit',(event)=>{event.preventDefault();if(!rizky_form.reportValidity())return;const data=new FormData(rizky_form);const nama=data.get('nama');const status=document.getElementById('rizky_form_status');status.textContent=`Terima kasih, ${nama}! Pesan berhasil divalidasi. Ini simulasi website; formulir belum mengirim data ke server.`;status.style.color='#287a50';rizky_form.reset();});}
