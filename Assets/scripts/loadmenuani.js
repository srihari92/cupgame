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
Application.LoadLevel(3);
}