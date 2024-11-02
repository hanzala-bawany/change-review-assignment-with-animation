
const persons = [
    {
        imgUrl: "./assetes/my pic.jpeg",
        name: "hanzala bawany",
        field: "Web developer",
        introduction: "This is Hanzala Bawany and recentely i have completed my FSC from Aisha Bawany Govt Collage and now i am web develoer student in SMIT unde iure, voluptatibus blanditiis nisi voluptas quasi qui esse doloremque. Error aliquid debitis quae, asperiores amet dolore dolorem perspiciatis qui expedita cumque? Lorem ipsum dolor consectetur adipisicing elit. Est quae obcaecati asperiores."
    },
    {
        imgUrl: "./assetes/innosufiyan.png",
        name: "InnoSufiyan",
        field: "Data Analyst",
        introduction: "Sufiyan is a Data Analyst who enjoys working with data to find trends and insights that help improve business strategies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta commodi quo asperiores, delectus quas facere exercitationem itaque corporis nihil ea molestiae . and he is recentelly join our software house ."
    },
    {
        imgUrl: "./assetes/abdul rehman.jfif",
        name: "Abdul Rehman",
        field: "Digital Marketer",
        introduction: "This is Abdul Rehman and  i am studying in 1st Year from computer science  from Jinna Govt Collage and now i am digital marketer student in SMIT unde iure, voluptatibus blanditiis nisi voluptas quasi qui esse doloremque. Error aliquid debitis quae, asperiores amet dolore dolorem perspiciatis qui expedita cumque? Lorem ipsum dolor "
    },
    {
        imgUrl: "./assetes/saeed.jfif",
        name: "Saeed ali",
        field: "Graphic Designer",
        introduction: "Saeed Ali is a skilled graphic designer with over two years of experience. He is passionate about creating visually appealing designs and is currently working with various clients.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta commodi quo asperiores, delectus quas facere exercitationem itaque corporis nihil ea molestiae temporibus aliquam. "
    },
    {
        imgUrl: "./assetes/abdullah.jfif",
        name: "Abdullah",
        field: "App Developer",
        introduction: "Ali Khan is a App developer with a focus on front-end technologies. He has developed several projects and is currently enhancing his skills in JavaScript and React. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta commodi quo asperiores, delectus quas facere exercitationem itaque."
    },
    {
        imgUrl: "./assetes/hunain.jfif",
        name: "Hunain ali",
        field: "Content Writer",
        introduction: "Hunain ali is a content writer with a knack for storytelling. He has worked with multiple clients to create engaging content for blogs, websites, and social media. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta commodi quo asperiores, delectus quas facere exercitationem itaque corporis nihil ea molestiae temporibus aliquam."
    },
    {
        imgUrl: "./assetes/Ahmed Khan.jfif",
        name: "Ahmed Khan",
        field: "SEO Specialist",
        introduction: "Ahmed is an SEO Specialist with deep knowledge of search engine algorithms. He helps businesses rank higher on search engines. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta commodi quo asperiores, delectus quas facere exercitationem itaque corporis nihil ea molestiae temporibus aliquam."
    },
    {
        imgUrl: "./assetes/zohaib.jfif",
        name: "zohaib rehman",
        field: "Social Media Manager",
        introduction: "Zohaib rehman is a Social Media Manager who builds and manages brand presence on social platforms, ensuring high engagement rates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta commodi quo asperiores, delectus quas facere ."
    },
    {
        imgUrl: "./assetes/zain.jfif",
        name: "Zain Malik",
        field: "App Developer",
        introduction: "Zain is an App Developer with skills in both iOS and Android platforms. He has developed several popular applications. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta commodi quo asperiores, delectus quas facere exercitationem itaque corporis nihil ea molestiae ."
    },
    {
        imgUrl: "./assetes/bilal ansari.jfif",
        name: "Bilal Ansari",
        field: "Network Engineer",
        introduction: "Bilal is a Network Engineer with expertise in network setup and troubleshooting. He ensures reliable connectivity for businesses. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis soluta commodi quo asperiores, delectus quas facere exercitationem itaque corporis nihil ea molestiae temporibus aliquam."
    }
];

const colorPairs = [
    {
        dark: "rgb(55, 0, 60)",
        light: "rgb(255, 229, 255)"
    },
    {
        dark: "rgb(3, 105, 161)",
        light: "rgb(215, 243, 253)"
    },
    {
        dark: "rgb(128, 0, 32)",
        light: "rgb(255, 204, 217)"
    },
    
    {
        dark: "rgb(139, 0, 0)", // Dark Red
        light: "rgb(255, 204, 203)" // Light Pinkish Red
    },
    {
        dark: "rgb(47, 79, 79)",
        light: "rgb(216, 228, 228)"
    },
    {
        dark: "rgb(255, 140, 0)",
        light: "rgb(255, 224, 178)"
    },
    {
        dark: "rgb(0, 100, 0)",
        light: "rgb(204, 255, 204)"
    },
    {
        dark: "rgb(70, 31, 0)",
        light: "rgb(245, 235, 220)"
    },
    {
        dark: "rgb(19, 74, 70)",
        light: "rgb(229, 255, 255)"
    },
    {
        dark: "rgb(6, 230, 99)",
        light: "beige"
    }
];

let colori = 0;
function changeTheme(){
    colori++;
    if(colori==colorPairs.length){
        colori=0;
    }
    document.documentElement.style.setProperty('--themecolor', colorPairs[colori].dark);
    document.documentElement.style.setProperty('--sideTheme', colorPairs[colori].light);

}







let i = 0;

function nextEmploye() {
    i++;

    if(i == persons.length-1){
        i = 0;
    }
    
    document.body.querySelector(".imgContainer").querySelector("img").setAttribute("src", persons[i].imgUrl);
    document.body.querySelector(".name").innerHTML = persons[i].name
    document.body.querySelector(".field").innerHTML = persons[i].field
    // document.body.querySelector(".info").innerHTML=    "This is Abdul Rehman and  i am studying in 1st Year from computer science  from Jinna Govt Collage and now i am digital marketer student in SMIT                  unde iure, voluptatibus blanditiis nisi voluptas quasi qui esse doloremque. Error aliquid debitis quae, asperiores amet dolore dolorem perspiciatis qui expedita cumque? Lorem ipsum dolor ";
    document.body.querySelector(".info").innerHTML = persons[i].introduction
    
}


function backEmploye() {
    i--;
    if(i < 0){
        i = persons.length-1    ;
    }
    
    document.body.querySelector(".imgContainer").querySelector("img").setAttribute("src", persons[i].imgUrl);
    document.body.querySelector(".name").innerHTML = persons[i].name
    document.body.querySelector(".field").innerHTML = persons[i].field
    // document.body.querySelector(".info").innerHTML=    "This is Abdul Rehman and  i am studying in 1st Year from computer science  from Jinna Govt Collage and now i am digital marketer student in SMIT                  unde iure, voluptatibus blanditiis nisi voluptas quasi qui esse doloremque. Error aliquid debitis quae, asperiores amet dolore dolorem perspiciatis qui expedita cumque? Lorem ipsum dolor ";
    document.body.querySelector(".info").innerHTML = persons[i].introduction
}
