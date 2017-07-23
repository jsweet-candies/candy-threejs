package def.threejs.three;
import def.js.Function;
public class Euler extends def.js.Object {
    public Euler(double x, double y, double z, String order){}
    public double x;
    public double y;
    public double z;
    public String order;
    public Function onChangeCallback;
    native public Euler set(double x, double y, double z, String order);
    @jsweet.lang.Name("clone")
    native public Euler Clone();
    native public Euler copy(Euler euler);
    native public Euler setFromRotationMatrix(Matrix4 m, String order, Boolean update);
    native public Euler setFromQuaternion(Quaternion q, String order, Boolean update);
    native public Euler setFromVector3(Vector3 v, String order);
    native public Euler reorder(String newOrder);
    @jsweet.lang.Name("equals")
    native public Boolean Equals(Euler euler);
    native public Euler fromArray(Object[] xyzo);
    native public double[] toArray(double[] array, double offset);
    native public Vector3 toVector3(Vector3 optionalResult);
    native public void onChange(Function callback);
    public static String[] RotationOrders;
    public static String DefaultOrder;
    public Euler(double x, double y, double z){}
    public Euler(double x, double y){}
    public Euler(double x){}
    public Euler(){}
    native public Euler set(double x, double y, double z);
    native public Euler setFromRotationMatrix(Matrix4 m, String order);
    native public Euler setFromRotationMatrix(Matrix4 m);
    native public Euler setFromQuaternion(Quaternion q, String order);
    native public Euler setFromQuaternion(Quaternion q);
    native public Euler setFromVector3(Vector3 v);
    native public double[] toArray(double[] array);
    native public double[] toArray();
    native public Vector3 toVector3();
    native public java.lang.Object onChangeCallback(java.lang.Object... args);
}

