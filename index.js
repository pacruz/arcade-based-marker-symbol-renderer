"use strict"
import UniqueValueRenderer from 'esri/renderers/UniqueValueRenderer';
import * as arcadeUtils from 'esri/support/arcadeUtils';
import PictureMarkerSymbol from 'esri/symbols/PictureMarkerSymbol';

var ArcadeBasedMarkerSymbolRenderer = UniqueValueRenderer.createSubclass(UniqueValueRenderer, {
  properties: {
    width: '18px',
    height: '18px'
  },
  getUniqueValueInfo: function(name, key) {
    // Assumes valueExpression is set (that's part of compiledFunc)
    var url = arcadeUtils.executeFunction(this.compiledFunc, arcadeUtils.createExecContext(name, arcadeUtils.getViewInfo(key)));
    var symbol = new PictureMarkerSymbol({
      url: url,
      width: this.width,
      height: this.height
    });

    return {symbol: symbol};
  }
});

export default ArcadeBasedMarkerSymbolRenderer;