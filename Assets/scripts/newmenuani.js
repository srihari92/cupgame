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
Application.LoadLevel(1);
}