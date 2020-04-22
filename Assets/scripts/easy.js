function OnMouseEnter()
{
renderer.material.color =Color.gray;
animation.Play("menunewgameselect");
}
function OnMouseExit()
{
renderer.material.color =Color.white;
animation.Play("menunewgamedeselect");
}
function OnMouseDown()
{
Application.LoadLevel(2);
Statics.diffcultylevel=1;
}
function OnGUI () 
{
	if(GUI.Button(Rect(Screen.width/2 -55,Screen.height-55,100,20),"Main Menu"))
	{
		Application.LoadLevel(0);
	}
}