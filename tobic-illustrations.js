/* TOBIC 동작 그림: 평가 문구·배점·계산 기능을 변경하지 않습니다. */
(function(){
  const counts={basic:16,skill:15,racket:4,foot:3};
  function attach(){
    for(const [group,count] of Object.entries(counts)){
      const parent=document.getElementById(group+'Items');
      if(!parent)continue;
      const rows=parent.querySelectorAll('.item');
      for(let i=0;i<Math.min(count,rows.length);i++){
        const row=rows[i];
        if(row.querySelector('.tobic-illustration'))continue;
        const box=document.createElement('div');box.className='tobic-illustration';
        const details=document.createElement('details');
        const summary=document.createElement('summary');summary.textContent='동작 그림 보기';
        const img=document.createElement('img');
        img.src='images/'+group+'-'+String(i+1).padStart(2,'0')+'.svg';
        img.alt=group+' '+String(i+1).padStart(2,'0')+'번 동작 순서 그림';
        img.loading='lazy';img.decoding='async';img.width=800;img.height=220;
        details.append(summary,img);box.append(details);
        const task=row.querySelector('.task');
        if(task){task.append(box)}else{row.append(box)}
      }
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',attach);
  else attach();
})();