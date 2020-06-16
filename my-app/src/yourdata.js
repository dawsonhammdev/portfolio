import img from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"

export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'dawsonHamm.',
        headerTagline: [//Line 1 For Header
                        'Hi 👋 You found me! I am Dawson.',
                        //Line 2 For Header
                        'Software Engineer ',
                        //Line 3 For Header
                        'from Kentucky'
    ],
        //Contact Email
        contactEmail:'hammsdesigns@gmail.com',
        // Add Your About Text Here
        abouttext: "I am a husband to my wonderful wife Ashley and a father to my daughter Madalyn. I am also the Youth Pastor at my local church and love to work with students. I play 3 instruments and I am very involved in my community. I love technology and I love to teach.",
        aboutImage:'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/14264930_526555494222153_8281955124704308242_n.jpg?_nc_cat=107&_nc_sid=13bebb&_nc_ohc=YTqU8QD6GC0AX-ctQut&_nc_ht=scontent-ort2-2.xx&oh=450df911eedde7ad86a22ad38d9a23c0&oe=5F0D8497',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'QuizBee', //Project Title - Add Your Project Title Here
             service:'React App Development and Design', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc: img,
             //Project URL - Add Your Project Url Here
             url:'https://quiz-app.dawsonhammdev.vercel.app/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Todo or not',
                service: 'React App Development and Design',
                imageSrc: img2,
                url: 'https://react-todo-j1boehfwg.now.sh/'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Wunderlist',
                service: 'React App Development and Design',
                imageSrc: img3,
                url: 'https://wunderlist1-bw-ft.github.io/UI/index.html'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Oxygen',
                service: 'React App Development and Design',
                imageSrc: img4,
                url: 'https://plant-htwoo-55bp0l5so.now.sh/'
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/dawsonhammdev'},
            {
                name: 'Linkedin',
                url: 'https://www.linkedin.com/in/dawson-hamm/'
            },
            {
                name: 'Twitter',
                url: 'https://twitter.com/dawson_hamm'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/_nillhamm_/'
            }

        ]
    }