#pragma strict
function OnGUI () 
{
	if(GUI.Button(Rect(Screen.width/2 -55,Screen.height-55,100,20),"Main Menu"))
	{
		Application.LoadLevel(0);
	}
}