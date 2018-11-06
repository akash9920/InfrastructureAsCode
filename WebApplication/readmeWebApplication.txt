
1) Angular seprates logic and htm/css render seprately
its very object oriented

2) there are 4 files. ts , html, css, spec(for testing : its optional)
3) anything available in the ts will be available to html file

------------important commands--------------

1) install angular cli, npm
2) to vreate a new component use: ng g c (name of component)
           // this automatically add the component to the app.module file

3) {{ variable declared in ts file}}  -->>> this is the way to use variable declared in ts in html file

4) alngualr has attirbutes, like ngFor which allow you to iterate 





class readmeWebApplication{

 /*   
1) to get rid of the two way binding , its better to use the ngForms. 
services. bcz as code becomes complex its better to deal with ng ngForms
*/
/*
constructor(postService: postService);

it is equivalent to 

constructor(public : postService)
*/

// we need to add  services in provider array[]

// second way:
injectable
/*
import it in service module

int in this way angular is going to create only one instance of it
*/









}

