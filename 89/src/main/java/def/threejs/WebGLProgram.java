package def.threejs;

import def.threejs.THREE.ShaderMaterial;
import def.threejs.THREE.WebGLRenderer;
import def.threejs.THREE.WebGLRendererParameters;
import def.threejs.THREE.WebGLUniforms;

@jsweet.lang.Mixin(target=def.dom.WebGLProgram.class)
public class WebGLProgram extends def.dom.WebGLProgram {
    public WebGLProgram(WebGLRenderer renderer, String code, ShaderMaterial material, WebGLRendererParameters parameters){}
    public double id;
    public String code;
    public double usedTimes;
    public Object program;
    public WebGLShader vertexShader;
    public WebGLShader fragmentShader;
    /**
     * @deprecated Use {@link WebGLProgram#getUniforms getUniforms()} instead.
     */
    public Object uniforms;
    /**
     * @deprecated Use {@link WebGLProgram#getAttributes getAttributes()} instead.
     */
    public Object attributes;
    native public WebGLUniforms getUniforms();
    native public Object getAttributes();
    native public void destroy();
    protected WebGLProgram(){}
}

