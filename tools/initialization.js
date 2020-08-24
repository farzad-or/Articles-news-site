const User = require("../model/user");


const initialization = async function()  {
    try {
        const EXIST_ADMIN = await User.findOne({role: 'admin'});
        if (EXIST_ADMIN) {
            return console.log('Admin already created');
        };
        
        const ADMIN = new User({

            userName:  'farzad',
            firstName: 'farzad',
            lastName:'ordikhani',
            password:'66009096',
            email:'farzad.ordikhani@gmail.com',
            phones:'09384556161',
            gender:'male',
            role: 'admin'
         
        });

        await ADMIN.save();

        console.log('Admin created');
    } catch (err) {
        console.log('Error in initialization function', err);
    };
};

module.exports = initialization;
