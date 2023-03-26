const quotes = [
    {
        quote : "편한 길 끝에는 뻔한 인생이, 어려운 길 끝에는 행복한 인생이.",
    },
    {
        quote : "세상은 당연히 불공평하다. 그러니 불평말고 노력해라",
    },
    {
        quote : "자만하지마라. 자만은 추락의 지름길.",
    },
    {
        quote : "곤경에 빠지는 것은 뭔가를 몰라서가 아니다. 뭔가를 확실하게 안다는 착각 때문이다.",
    },
    {
        quote : "한계란 다시 도전하기 위한 목표일 뿐이다.",
    },
    {
        quote : "신이라는 존재들은 결국 우리 인간의 메아리에 불과하다.",
    },
    {
        quote : "le vent se leve, il faut tenter de vivre.",
    },
    {
        quote : "완벽한 흑과 백은 없다.",
    },
    {
        quote : "영원한 건 없고, 유한하기에 가치있다.",
    },
]

const quote = document.querySelector("#quote span:first-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
