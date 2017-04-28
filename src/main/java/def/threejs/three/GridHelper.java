package def.threejs.three;
public class GridHelper extends LineSegments {
    public GridHelper(double size, double step){}
    public Color color1;
    public Color color2;
    native public void setColors(double colorCenterLine, double colorGrid);
    protected GridHelper(){}
}

