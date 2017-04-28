package def.threejs.three;
import def.js.RegExp;
@jsweet.lang.Interface
public abstract class LoaderHandler extends def.js.Object {
    public jsweet.util.union.Union<RegExp,Loader>[] handlers;
    native public void add(RegExp regex, Loader loader);
    native public Loader get(String file);
}

