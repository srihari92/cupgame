function OnMouseEnter()
{
renderer.material.color =Color.gray;
animation.Play("menuloadselect");
}
function OnMouseExit()
{
renderer.material.color =Color.white;
animation.Play("menuloaddeselect");
}
function OnMouseDown()
{
Application.LoadLevel(2);
Statics.diffcultylevel=2;
}
function OnGUI () 
{
	if(GUI.Button(Rect(Screen.width/2 -55,Screen.height-55,100,20),"Main Menu"))
	{
		Application.LoadLevel(0);
	}
}