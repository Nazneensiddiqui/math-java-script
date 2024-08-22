//type of export - nemed export , defould export

// export const name = "jonh";
// export const age = 30;

const name = "nazneen";
const age = 28;


// defould export cam be one think exported
//kisi bhi file me sirf ek hi default hota he is liye kuch bhi name de sakte he import karne me 

const data = ()=>{
    let firstname = "nazneen";
    let lastname = "siddiqui";
    return firstname + " " + lastname;
};

const massege = ()=>{
    console.log('hello');
};
export{name,age,massege};
export default data;
