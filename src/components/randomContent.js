let randomContent = [
    "O hi mark",
    "wow ur so beautiful",
    "i want beautiful kex with you",
    "бюбка я скучаю",
    "бюбкя а ми скорьо бу пататси по куни",
    "а я тя юю",
    "классная погода",
    "нос чешется",
    "я юю тя а ти миии?",
    "ми скоро бу вмести!",
    "ти кукурузятко",
]

randomContent.forEach((element, index) => {
    randomContent[index] = {text: element, tag: "p"}
})

export default randomContent
