# React + Vite
css:-
block	Puts label on its own line (above textarea)
mb-1	Adds spacing below label
resize-none	Disables textarea resizing
focus:outline-none	Removes browser's default focus border
focus:ring-2	Adds a 2px ring on focus
focus:ring-blue-500	Makes the ring blue
w-full	Makes textarea full width




LOGICS:
<div><button onClick={() => navigate('/task/add')}>Add Task</button>

not -- <button onClick={navigate('/task/add')}>Add Task</button>


 task.map((t,i)=>(
        <tr key={i}>
            <td>{t.name}</td></tr>
    ))

    bracket 
    item index