'use strict';
var Nav = React.createClass({
   handleNavClick: function (e) {
      var currentPage = e.target.dataset.name;
      routie(currentPage);
      return false;
   },
   render: function() {
      return(
         <div className="navbar-wrapper">
           <div>
            <nav className="navbar navbar-inverse navbar-static-top">
               <div>
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                 <div id="navbar" className="navbar-collapse collapse">
                   <ul className="nav navbar-nav">
                     <li><a href="#" onClick={this.handleNavClick} data-name="page1" >Page 1</a></li>
                     <li><a href="#" onClick={this.handleNavClick} data-name="page2" >Page 2</a></li>
                     <li><a href="#" onClick={this.handleNavClick} data-name="page3" >Page 3</a></li>
                   </ul>
                 </div>
               </div>
            </nav>
           </div>
         </div>
      );
   }
});
var Page1 = React.createClass({
   render: function() {
      return(
         <div>
            <Nav />
            <div className="row">
               <div  className="col-md-12">
                  <h1>Page 1</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
            </div>
         </div>
      );
   }
});
var Page2 = React.createClass({
   render: function() {
      return(
         <div>
            <Nav />
            <div className="row">
               <div  className="col-md-12">
                  <h1>Page 2</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
            </div>
         </div>
      );
   }
});
var Page3 = React.createClass({
   render: function() {
      return(
         <div>
            <Nav />
            <div className="row">
               <div  className="col-md-12">
                  <h1>Page 3</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
            </div>
         </div>
      );
   }
});
routie({
   '': function () {
      ReactDOM.render(
         <Page1 />,
         document.getElementById('app')
      );
   },
   'page1': function () {
      ReactDOM.render(
         <Page1 />,
         document.getElementById('app')
      );
   },
   'page2': function () {
      ReactDOM.render(
         <Page2 />,
         document.getElementById('app')
      );
   },
   'page3': function () {
      ReactDOM.render(
         <Page3 />,
         document.getElementById('app')
      );
   }
});
