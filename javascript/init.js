//
//     init.js
//

let SecondsLeft;
let TimeDisplay;
let Timer = null;

// Let's get the party started
init( );


function init( ) {
  SecondsLeft = 20;
  TimeDisplay = document.querySelector( ".TimerDisplay" );

  showTimeLeft( );
  Timer = setTimeout( redirect, 1000 );
}

function redirectNow( ) {
  if( Timer ) clearTimeout( Timer );
  SecondsLeft = 0;
  showTimeLeft( );
  redirect( );
}

function redirect( ) {
  if( --SecondsLeft >= 0 ) {
    showTimeLeft( );
    Timer = setTimeout( redirect, 1000 );
  }
  else {
//    window.location.href = "https://www.RipsPics.com"; // For Debug
    window.location.replace( "https://www.NewEnglandCameraClub.com" ); // User can NOT go back to previous page
  }
}


function showTimeLeft( ) {
  TimeDisplay.innerHTML = `
    <span>Will redirect in</span>
    <div class="Time">${SecondsLeft} seconds</div>
    <span>to: <span class="SiteName">www.NewEnglandCameraClub.com</span></span>
    <hr>
    <h4>After 22 Nov 2023 www.ccocne.org will no longer work to access the website</h4>
    <button type="button" name="button" onclick=redirectNow()>GO THERE NOW</button>
  `;
}


//
