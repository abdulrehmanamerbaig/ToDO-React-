import './Task.css'



function Task({task_id, task, removeTaskFromList, editTask,  setStatus} ) {
let content;
let description;
let date;

  if (task.status){
    content = <div className='d-flex col-12 col-lg-5 task_listing align-items-center '>
                <button onClick={() => setStatus(task_id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M27.5 13.85V15C27.4985 17.6955 26.6256 20.3184 25.0117 22.4773C23.3977 24.6362 21.1291 26.2156 18.5442 26.9799C15.9593 27.7442 13.1966 27.6524 10.6681 26.7182C8.1396 25.7841 5.98082 24.0576 4.5137 21.7963C3.04658 19.5351 2.34974 16.8601 2.5271 14.1704C2.70445 11.4807 3.74651 8.92042 5.49785 6.87136C7.24919 4.82229 9.61598 3.39424 12.2452 2.8002C14.8745 2.20615 17.6253 2.47793 20.0875 3.57501" stroke="#156B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M27.5 5L15 17.5125L11.25 13.7625" stroke="#156B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                  
                  <p className='mx-2 mt-3 done_status text-break '>{task.title}</p>

              </div>
    if (!task.description.length){
      description = <div className='no_desc_d'>None</div>
    }
    else{
      description = <div>{task.description}</div>
    }
    description = <div className="task_desc ">
                    <p className='done_status d-flex gap-2'  >Task #{task_id + 1} Description: {description}</p>
                  </div>
    date = <div className="done_status">
      {task.date.toDateString()}
    </div>
  }
  else{
    content = <div className='d-flex col-12 col-lg-5 task_listing align-items-center'>
                  <button onClick={() => setStatus(task_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M27 13.3572V14.5072C26.9985 17.2027 26.1256 19.8255 24.5117 21.9844C22.8977 24.1434 20.6291 25.7228 18.0442 26.487C15.4593 27.2513 12.6966 27.1595 10.1681 26.2254C7.6396 25.2912 5.48082 23.5648 4.0137 21.3035C2.54658 19.0422 1.84974 16.3672 2.0271 13.6775C2.20445 10.9879 3.24651 8.42756 4.99785 6.3785C6.74919 4.32943 9.11598 2.90138 11.7452 2.30734C14.3745 1.71329 17.1253 1.98508 19.5875 3.08216" stroke="#3E3B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 11L12.3077 19L10 16.6024" stroke="#A09D9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </button>
                    
                    <p className='mx-2 mt-3 text-break'>{task.title}</p>

              </div>
    if (!task.description.length){
      description = <div className='no_desc'>None</div>
    }
    else{
      description = <div>{task.description}</div>
    }
    description = <div className="task_desc col-12 ">
                    <p className='d-flex gap-2'>Task #{task_id + 1} Description: {description}</p>
                  </div>
    date = <div>
    {task.date.toDateString()}
  </div>

  }
  return (
    <>
    <div className="d-flex   justify-content-center ">
      <div className="col-9 text-wrap ">
        <div>
                  <div className='d-flex flex-wrap t-box justify-content-between  align-items-center'>

                                {content}
                                <div className="btns col-12 col-lg-5 d-flex align-items-center  justify-content-center gap-1">
                                  <div className="date" >{date}</div>
                                  <div className="edit_btn ">
                                    <button
                                    
                                      onClick={() => editTask(task_id)}
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M15 25H26.25" stroke="#156B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20.625 4.37501C21.1223 3.87773 21.7967 3.59836 22.5 3.59836C22.8482 3.59836 23.193 3.66695 23.5147 3.8002C23.8365 3.93346 24.1288 4.12878 24.375 4.37501C24.6212 4.62124 24.8165 4.91355 24.9498 5.23527C25.0831 5.55698 25.1516 5.90179 25.1516 6.25001C25.1516 6.59823 25.0831 6.94304 24.9498 7.26475C24.8165 7.58646 24.6212 7.87878 24.375 8.12501L8.75 23.75L3.75 25L5 20L20.625 4.37501Z" stroke="#156B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </button>
                                    
                                  </div>
                                  <div className="delete_btn">
                                      <button
                                        onClick={() => removeTaskFromList(task_id)}
                                      >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                              <path d="M3.75 7.5H6.25H26.25" stroke="#BC0808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                              <path d="M10 7.5V5C10 4.33696 10.2634 3.70107 10.7322 3.23223C11.2011 2.76339 11.837 2.5 12.5 2.5H17.5C18.163 2.5 18.7989 2.76339 19.2678 3.23223C19.7366 3.70107 20 4.33696 20 5V7.5M23.75 7.5V25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5H8.75C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25V7.5H23.75Z" stroke="#BC0808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                              <path d="M12.5 13.75V21.25" stroke="#BC0808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                              <path d="M17.5 13.75V21.25" stroke="#BC0808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </button>
                                          
                                  </div>
                                  
                                </div>
                  </div>
              <div className="tasks_line"></div>
              {description}
        
        </div>
      
      </div>
    
    </div>
    
    </>
  )
}

export default Task
