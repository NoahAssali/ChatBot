bot = document.getElementsByClassName('dia')[1]
badbot = document.getElementsByClassName('dia')[0]
button1 = document.getElementsByClassName('one')[0]
button2 = document.getElementsByClassName('two')[0]

const good = () => {
    badbot.remove()
    bot.innerHTML = 'Thats great to hear! What can i do for you today?'
    button1.innerHTML = 'Joke!'
    button2.innerHTML = 'Fact!'
    button1.removeEventListener('click', good)
    button1.addEventListener('click', Joke)
    button2.removeEventListener('click', bad)
    button2.addEventListener('click', fact)
}

const Joke = () => {
    badbot.remove()
    const jokes = ['My dolphin puns are terrible on porpoise.', 'A burger walks into a bar. The bartender says Sorry, we dont serve food here', 'Where do generals keep their armies? In their sleevies!', 'Whats brown and sticky? A stick.', 'Why cant you play poker on the African Savanna? Theres too many cheetahs.', 'I was wondering why the baseball was getting bigger. Then it hit me.', 'Once youve seen one shopping center, youve seen the mall.']
    const randomindex = Math.floor(Math.random() * jokes.length) 
    bot.innerHTML = jokes[randomindex]
    document.getElementsByClassName('image')[0].src = 'https://media.tenor.com/QeyFuBQrWyYAAAAM/irobot-i-robot.gif';
    button1.innerHTML = 'Fact!'
    button2.innerHTML = 'Thank you!'
    button1.removeEventListener('click', Joke)
    button1.addEventListener('click', fact)
    button2.removeEventListener('click', bad)
    button2.addEventListener('click', erm)
}

const fact = () => {
    badbot.remove()
    const facts = ['Australia is wider than the moon.', 'Headphones can increase the bacteria in your ears.', 'Scotland chose the unicorn as its national animal.', 'Avocados are not vegetables.', 'The Eiffel Tower gets taller in the summer.', 'Human teeth are the only part of the body that cant heal themselves.', 'the human heart beats 100,000 times a day.']
    const randomindex1 = Math.floor(Math.random() * facts.length) 
    bot.innerHTML = facts[randomindex1]
    document.getElementsByClassName('image')[0].src = 'https://media.tenor.com/QeyFuBQrWyYAAAAM/irobot-i-robot.gif';
    button1.innerHTML = 'Joke!'
    button2.innerHTML = 'Thank you!'
    button1.removeEventListener('click', fact)
    button1.addEventListener('click', Joke)
    button2.removeEventListener('click', bad)
    button2.addEventListener('click', erm)
}

const bad = () => {
    badbot.remove()
    bot.innerHTML = 'Im sorry about that. Do you want to hear a joke to cheer you up?';
    button1.innerHTML = 'yes.';
    button2.innerHTML = 'No thank you.';
    document.getElementsByClassName('image')[0].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKymSPfJ3GSESGIcXuTnx5pP21-NaGQyYzvXXO-sF7WVMc27dM34tE0Tm7vwtURj-CN0&usqp=CAU';
    button2.removeEventListener('click', bad)
    button2.addEventListener('click', erm)
    button1.removeEventListener('click', good)
    button1.addEventListener('click', Joke)
}

const erm = () => {
    badbot.remove()
    bot.innerHTML = 'Let me know if you need anything!'
    button1.remove()
    button2.remove()
}

button1.addEventListener('click', good)
button2.addEventListener('click', bad)
