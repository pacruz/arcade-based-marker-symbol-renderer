# arcade-based-marker-symbol-renderer

Sample of custom renderer that uses and Arcade expression in creating a symbol URL

## Sample application use

To add manually, add the module using the following:

```bash
npm i --save git+ssh://git@github.com/pacruz/arcade-based-marker-symbol-renderer.git
```

An example snippet for a Typescript-based application:

```typescript
import ArcadeBasedMarkerSymbolRenderer from 'arcade-based-marker-symbol-renderer';

var rend = new ArcadeBasedMarkerSymbolRenderer();
rend.valueExpression = "'http://arcade-picturefill.surge.sh/' + $feature.SymbolProperty1 + '/' + $feature.SymbolProperty2";

var featureLayer = new FeatureLayer({
  url: 'https://services.arcgis.com/gaVYtevi9moVMgCz/arcgis/rest/services/ArcadePoints/FeatureServer/0',
  outFields: ['*'],
  renderer: rend
});
map.add(featureLayer);
```