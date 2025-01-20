function customRender(reactElement , container){
    /*
    const domElement = document.createElement(reactELement.type)
    domElement.innerHTML = reactELement.children
    domElement.setAttribute('href', reactELement.props.href)
    domElement.setAttribute("target",reactELement.props.target)
    mainContainer.appendChild(domElement)

    ** So this code have problem that we have to setAttribute one by one 😥 **
    */


    // this is modular code
    const domElement = document.createElement(reactELement.type)
    domElement.innerHTML = reactELement.children
    for (const prop in reactELement.props) {
        if(prop === 'children') continue; // this can be ignored coz early we used to write this , but Nowadays their is no need ..
        domElement.setAttribute(prop,reactELement.props[prop])
    }
    container.appendChild(domElement)

}

const reactELement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById("root")

customRender(reactELement,mainContainer)