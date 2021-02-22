import img from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"
import img5 from "./img/img5.png"
import img6 from "./img/img6.png"
import img7 from "./img/img7.png"
import img8 from "./img/crypto.png"
import aboutimg from "./img/about.jpg"

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
        aboutImage: aboutimg,
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
        { 
            id: 6,//DO NOT CHANGE THIS (Please)😅
            title: 'Huddle',
            service: 'React App',
            imageSrc: img6,
            url: 'https://huddle.sirchit.com/dashboard/index.html?action=register'
        },
        { 
            id: 7,//DO NOT CHANGE THIS (Please)😅
            title: 'Story Squad',
            service: 'React App',
            imageSrc: img7,
            url: 'https://c.storysquad.dev/login'
        },
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
                title: 'Russellville United Pentecostal Church',
                service: 'Wordpress/Divi',
                imageSrc: img5,
                url: 'https://russellvilleupc.com'
            },
            { 
                id: 5,//DO NOT CHANGE THIS (Please)😅 //c
                title: 'Reliant Healthcare Staffing',
                service: 'Wordpress/Divi',
                imageSrc: img4,
                url: 'https://relianthealthcarestaffing.com'
            },
            
            {
                id: 6,//DO NOT CHANGE THIS (Please)😅
                title: 'Crypto Search',
                service: 'React Using Axios',
                imageSrc: img8,
                url: 'https://cryptosearch2.vercel.app/'
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