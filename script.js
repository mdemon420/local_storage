const db = {};

const addToDB = item => {
    const db = getDb();
    if(item in db){
        db[item] = db[item] + 1;
    }
    else{
        db[item] = 1;  
    }
    
    setToDb(db);
}

const setToDb = db =>{
    const dbJSON = JSON.stringify(db);
    localStorage.setItem('Name',dbJSON);
}
const removeFromDB = item => {
    const db = getDb();
    delete db[item];
}

const getDb = () => {
    let saveDb = localStorage.getItem('Name');
    saveDb = JSON.parse(saveDb);
    return saveDb;
    console.log(saveDb)
}