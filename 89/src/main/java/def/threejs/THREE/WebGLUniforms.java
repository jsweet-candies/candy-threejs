package def.threejs.THREE;

import def.threejs.WebGLProgram;

public class WebGLUniforms extends def.js.Object {
    public WebGLUniforms(Object gl, WebGLProgram program, WebGLRenderer renderer){}
    public WebGLRenderer renderer;
    native public void setValue(Object gl, Object value, Object renderer);
    native public void set(Object gl, Object object, String name);
    native public void setOptional(Object gl, Object object, String name);
    native public static void upload(Object gl, Object seq, Object[] values, Object renderer);
    native public static Object[] seqWithValue(Object seq, Object[] values);
    native public static Object[] splitDynamic(Object seq, Object[] values);
    native public static Object[] evalDynamic(Object seq, Object[] values, Object object, Object camera);
    native public void setValue(Object gl, Object value);
    protected WebGLUniforms(){}
}

