import './style.css'

type Email={
     from: string;
    header: string;
    content: string;
    emailAddress: string;
    img: string;
    read: boolean
}
type State={
    emails: Email[];
}


const state:State = {
  emails: [
    {
      from: 'Nico',
      header: "Link to today's video and slides is up!",
      content:
        'Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'nico@email.com',
      img: 'assets/nico.JPG',
      read: false
    },
    {
      from: 'Ed',
      header:
        "Congratulations! You have received a free beaver! Your name will now be displayed in the classroom's beaver list!",
      content:
        'Beaver beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'ed@email.com',
      img: 'assets/ed.JPG',
      read: false
    },
    {
      from: 'Government',
      header: 'Time to pay your tax!',
      content:
        'Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'government@email.com',
      img: 'assets/gov.jpg',
      read: false
    }
    // feel free to add more emails here
  ]
}
let mainEl=document.querySelector('main');

function singleEmail(email:Email){

 if( mainEl) mainEl.textContent=''
 
  let sectionEl=document.createElement('section')
  sectionEl.className='single-email'
 
  let buttonEl=document.createElement('button')
  buttonEl.className='single-email__button'
  buttonEl.textContent='⬅  Back'
  buttonEl.addEventListener('click',function(){ 
    render()
   })
 
  let divEL=document.createElement('div')
  divEL.className='single-email__sender-section'
  
  let imgEl=document.createElement('img')
  imgEl.className='single-email__image'
  imgEl.src=email.img
 
  let spanEl=document.createElement('span')
  spanEl.className='single-email__sender'
  spanEl.textContent=`${email.from } (${email.emailAddress})`
 
  let h1El=document.createElement('h1')
  h1El.className='single-email__header'
  h1El.textContent=email.header
 
  let pEl=document.createElement('p')
  pEl.className='single-email__content'
  pEl.textContent=email.content
   
  divEL.append(imgEl,spanEl)
  sectionEl.append(buttonEl,divEL,h1El,pEl)
 
  mainEl.append(sectionEl)
 
 }
 
function unreadEmails(email:Email){

    let ulEl = document.createElement('ul')
    ulEl.className='emails-list'
    ulEl.addEventListener('click', function(){
        email.read=true
      
        singleEmail(email)
        
      })
    let liEl = document.createElement('li')
    liEl.className='emails-list__item'

    let spanEl = document.createElement('span')
    spanEl.className='emails-list__item__read-icon material-symbols-outlined'
    spanEl.textContent = 'mark_email_unread'

    let imgEl = document.createElement('img')
    imgEl.className='emails-list__item__image'
    imgEl.src = email.img

    let pEl = document.createElement('p')
    pEl.className='emails-list__item__from'
    pEl.textContent = email.from

    let p2El = document.createElement('p')
    p2El.className='emails-list__item__content'
    p2El.textContent = email.content

    liEl.append(spanEl, imgEl, pEl, p2El)
    ulEl.append(liEl)
    if(mainEl) 
    mainEl.append( ulEl)
 
  }
    
function readEmails(email:Email){
 

  let h1El = document.createElement('h1')
  h1El.textContent = 'Inbox'
let ulEl = document.createElement('ul')
 ulEl.className='emails-list'
 ulEl.addEventListener('click', function(){
  singleEmail(email)
  
})

let liEl = document.createElement('li')
liEl.className='emails-list__item read'

let spanEl = document.createElement('span')
spanEl.className='emails-list__item__read-icon material-symbols-outlined'
spanEl.textContent = 'mark_email_read'

let imgEl = document.createElement('img')
imgEl.className='emails-list__item__image'
imgEl.src = email.img

let pEl = document.createElement('p')
pEl.className='emails-list__item__from'
pEl.textContent = email.from

let p2El = document.createElement('p')
p2El.className='emails-list__item__content'
p2El.textContent = email.content

liEl.append(spanEl, imgEl, pEl, p2El)

ulEl.append(liEl)
if(mainEl) 
mainEl.append( ulEl)
  }

function renderEmails(){
  mainEl.textContent=''
  let h1El = document.createElement('h1')
  h1El.textContent = 'Inbox'
  mainEl.append( h1El)
 
for(let email of state.emails){
    if(email.read === false ){
      unreadEmails(email)
    }
    else readEmails(email)
}

}


function render(){
  mainEl.textContent=''
  renderEmails()
}
render()