package def.threejs.THREE;
import def.js.RegExp;
@jsweet.lang.Interface
public abstract class LoaderHandler extends def.js.Object {
    public jsweet.util.union.Union<RegExp,AnyLoader>[] handlers;
    native public void add(RegExp regex, AnyLoader loader);
    native public AnyLoader get(String file);
}

