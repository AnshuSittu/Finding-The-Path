# Finding-The-Path
Namste React Episode 7
How to create a Link using Routing
Dynamic Routing
Create Browser Routing
Router Provider
Link
Error Page
use router Hook
  Clint Side Routin
  Server Side Routing
    

**How is useEffect called
>it comes from react library using name import {useEffect} from "react"
>it is called using two argument 
  i> call back function
  ii> Dependency array  
  
  useEffect((call back function)=>{}, [Dependency array ]);


**When is this useEffect Is called?
>> useEffect is basically is called after every render of that component.
> every time when the component/ header component is render useEffect will called 
 > As we have put this [] Dependency array so this Dependency array changes the behaviour of its render
>i.e if you don't Dependency array although it is not compulsory here but callback function is compulsory here  
 but if you call useEffect without Dependency array it will render every time component render
 
 
 const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
console.log("header Render");

useEffect(() =>{
  console.log("useEffect Called")
}, []); 

>> SO every time when this Header component will be render this useEffect is called
>As we have put this dependence array so this dependence changes the behaviour of this array 

useEffect(() =>{
  console.log("useEffect Called")
}, [dependence array])

> Putting dependence array is not mandatory
>only callback function is mandatory inside useEffect. 

>if No dependence array => useEffect is called on every component render

>if the dependence array is empty = [] => the useEffect is called on only initial
 render and just once when component is render first time.

> the basic nature of useEffect is to be called after every render but if we give 
  dependence array then it is called just after once. 
 
**what if we put Something [] in dependence array .
> then it will be only called when dependence changes
>If dependence array is [btnNameReact] => called every time btnNameReact is updated 
>i.e If dependence is on btnNameReact then every time btnNameReact changes the useEffect will be called.

 
***useState***
>Never create useState out side of the component.
 const [btnNameReact, setBtnNameReact] = useState("");
> it will be always inside of the component. it does not make any sense if you call out side of body component.

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
console.log("header Render");
} 

Error will be :
**Invalid hook call. Hooks can only be called inside of the body of a function component. **

>useState have a purpose it is used for creating  local state variable inside function component.
> try to call this hooks on the TOP
>i.e where the function start always try to call the useState where the function start to avoid inconstancy 

>Never use your useState Hooks or create state variable inside if else statement
 for loop or in function.  
 
 if(){
 const [btnNameReact, setBtnNameReact] = useState("");
 }
 
> although it is valid but crate inconstancy 

<b> The state variable is meant to be created inside functional component on the higher level </b>


***Routing***
> for this we have to use React Router DOM 
> to create routing you have to go on App.js
> then need to create routing configuration 
> Import cretaeBrowserRoter from react router DOM
> configuration means that some information will define what will happen in specific route
  i.e information that will tell browser router what will happen on specific path
> cretaeBrowser take list of path
> path is nothing but object
> each and every object define a different path what should happen on this path 
     {
     path:"/",
    element: <AppLayout/>,
  },   
>So this path is telling if the path is "/" then load home AppLayout
>After crating this configuration you need to pass/provide this configuration to render on this page
<b> Now you have to import RouterProvider from react-router-dom</b>
> it will provide this routing configuration to this app

>So earlier we are rendering directly  <AppLayout/> component
>Now instead of this we will provide Router configuration


** How to provide Router configuration
> So RouterProvider is a component 
> add provide appRouter component in the RouterProvider

root.render(<RouterProvider router={appRouter} />);



https://reactrouter.com/en/main/routers/create-browser-router

****rafc can crate component directly in VS code ***

>whenever you see a function stating with use its a Hooks as it is a common convection used in a react industries 

<b>useRouteError</b>
>using this useRouteError hooks we can crate our own error page 
>if you have error component you have to give path, error element   
>using this useRouteError hooks it gives more information about the error

 
How to make header footer intact  across the pages 

**Children Route **

> to achieve this we will use child Route 
> so it will be Children route of AppLayout
>Children is list of path of Children
  {
    path:"/",
    element: <AppLayout/>,
    children: [
      {
        path:"/About",
        element:<About/>,
       },
       {
         path:"/Contact",
         element:<Contact/>,
        },
    ],
    errorElement: <Error/>,
  },
 
> it take the same configuration as earlier 
>Now this <About/> & <Contact/> is the children of <AppLayout/ >
>Now it need to be render in the AppLayout accordingly 
> SO basically we need below condition 

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
              /* if the path = /  then 
                 <Body/> Should Render, */
	        
	      /* {if the path = /about } then 
          <About/>  Should Render */
		  
		  /* {if the path = /contact } then 
               <Contact/> Should Render */
	   
    </div>
  );
};
 
> So here children need to be push over AppLayout according to route
>  {
    path:"/",
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element:<body/>,
      },
      {
        path:"/About",
        element:<About/>,
       },
       {
         path:"/Contact",
         element:<Contact/>,
        },
    ],
 
> AppLayout has 3 children now I want to load according to path
> So this should be load over AppLayout 
<b> so for this  react-router-dom gives us "OUTLET" </b>
 
 
**OUTLET** 
>So to use this Outlet you need to import outlet from react-router-dom
>and just you have to use it like below :

   const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}; 
 
>So whenever there is change in the path so This Outlet is filled with the children according to there Path
> now when you got to the /about it will take to the about page and with the header it is working as a tunnel 
>i.e header is intact  outlet is getting filled with the component that has pass a children into parent 
 parent is AppLayout
> you can have multiple parent you have multiple children and according to the route it will render 
>this is how children render is created 


**How to create Link in About Contact**
>IN React then you want to route to another page <b>DO NOT USE</b> <a></a>
>if we use this the whole page is refreshed which is not good practice  
> you can navigate to the new page without re-loading the page 
> for this we have to use "LINK Component"
>  LINK is come from React-router-dom
 
**Link Component***
> Import Link from react-router-dom first 
> it work exactly the same as <a> tag

 <Link to="/">Home</Link>

> There are two types of Routing that one can have in the React Web application 
  I>  Clint Side Routing
  II> Server Side Routing
  
> React is single page application it means it does not refreshed the page only it only Changing the component.
> i.e Clint Side Routing happing here as page is not re-load it is the changing of the component
> as we are not making any server call here as all the component are already loaded into the app 
> so whenever we go to any page it just load the component of that page it does not make any network call
>Link is a wraper over <a></a>tag
**Why it is a single page application 
>its just one page only component gets interchange via client side routing


> Graph QL study ********

 **Dynamic Routing**

How to give Path to Dynamic Routing 

{
        path: "/restaurant/:resID",
        
      },
 
 :resID: this mean that Dynamic ID
 this will change according to id
 
 join(",") use to seprate between two array
 
 

 
 
 
 
Why there is an error "Cannot destructure property 'name' of '(intermediate value)' as it is undefined."
>So earlier the resInfo was null and code was trying to find name inside null due to that shimmer condition 


***useParams**
>its a hooks and basically know as useParams
> need to import { useParams } from react-router-dom
>params is a object with resID

How TO use useParams Hooks 
> you need to extract resID from useParams hooks
> Params is a object with the resID

Note: we have keep the API in consents and export it in the restaurantMenu with the resID

How to meagre this useParams with the restaurantCard so that once One click on the card open its menu
>so for this need to go to body component and find where is the restaurantCard
>make this click able 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 