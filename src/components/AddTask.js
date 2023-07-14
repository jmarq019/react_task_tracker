import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()
        if (!text) {
            alert('用事を入力してください');
            return;
        }

        onAdd({text, day, reminder})

        setText('');
        setDay('');
        setReminder(false);


    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>予定</label>
            <input type='text' placeholder='何の用事' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>日と時間</label>
            <input type='text' placeholder='いつですか' value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>リマインダー 設定</label>
            <input type='checkbox' value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type='submit' value='登録する 📖' className='btn btn-block' />
    </form>
  )
}

export default AddTask;