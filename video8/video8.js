console.log(`hello world from video 8`);
// Key:value
let obj = {
    name: 'Jason',
    address_vn: 'Hcm',
    email: 'abc@gmail.com',
    gender: 'female',
    a: function () {
        console.log('hello jason');
        return ''
    }

};
let i = 'name';
let e = 'address_vn';
// obj[i] = 'kally';
obj.name = "bryan";
obj.address_vn = 'vinh long';
obj[e] = 'sai gon';

let b = "i'am Jason";
let c = '';
let JSON = "{hobby: 'sport',job: 'manager',}"
console.log('type c;', typeof c, 'type b:', typeof b, 'type c:', typeof c);
console.log('what is your name?', 'my name is:', obj['name']);
console.log('what is your address?', 'name address is:', obj.address_vn);
console.log('call function:', obj.a());

