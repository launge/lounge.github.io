function sendFeedback(){
    let name = document.getElementById('userName').value;
    let messageSlot = document.getElementById('responseMessage');

    if (name.trim() === "") { 
        messageSlot.textContent = "Ошибка: введите имя!";
        messageSlot.style.color = "#e74c3c";
    } else {
    
        messageSlot.textContent = "Спасибо," + name + "! Твои данные приняты.";
        messageSlot.style.color = "#27ae60";
        
        document.getElementById('userName').value = "";
    }
}
