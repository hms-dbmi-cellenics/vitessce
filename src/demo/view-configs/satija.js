

const satijaName = 'HBM336.FWTN.636';
const satijaDescription = 'Spleen scRNA-seq HuBMAP dataset with cell type annotations generated by the Satija lab and the Seurat v3.1 Label Transfer workflow';
export const satija2020 = {
  version: '1.0.0',
  name: satijaName,
  description: satijaDescription,
  public: true,
  datasets: [
    {
      uid: '339952f4-a47f-46dc-9228-18ba2ca256f2',
      name: '339952f4-a47f-46dc-9228-18ba2ca256f2',
      files: [
        {
          type: 'cells',
          fileType: 'cells.json',
          url: 'https://s3.amazonaws.com/vitessce-data/0.0.31/master_release/satija/2dca1bf5832a4102ba780e9e54f6c350.cells.json',
        },
        {
          type: 'cell-sets',
          fileType: 'cell-sets.json',
          url: 'https://s3.amazonaws.com/vitessce-data/0.0.31/master_release/satija/2dca1bf5832a4102ba780e9e54f6c350.cell-sets.json',
        },
        {
          type: 'expression-matrix',
          fileType: 'expression-matrix.zarr',
          url: 'https://vitessce-data.storage.googleapis.com/0.0.31/master_release/satija/2dca1bf5832a4102ba780e9e54f6c350.expression-matrix.zarr',
        },
      ],
    },
  ],
  initStrategy: 'auto',
  coordinationSpace: {
    embeddingType: {
      UMAP: 'UMAP',
    },
    embeddingZoom: {
      A: 3,
    },
    embeddingTargetX: {
      A: 0,
    },
    embeddingTargetY: {
      A: 0,
    },
    spatialZoom: {},
    spatialTargetX: {},
    spatialTargetY: {},
    geneExpressionColormapRange: {
      A: [0, 0.25],
    },
  },
  layout: [
    {
      component: 'cellSets',
      h: 4,
      w: 4,
      x: 4,
      y: 0,
      coordinationScopes: {},
    },
    {
      component: 'cellSetSizes',
      h: 4,
      w: 4,
      x: 8,
      y: 0,
      coordinationScopes: {},
    },
    {
      component: 'scatterplot',
      h: 4,
      props: {
        mapping: 'UMAP',
        view: {
          target: [
            0,
            0,
            0,
          ],
          zoom: 3,
        },
      },
      w: 4,
      x: 0,
      y: 0,
      coordinationScopes: {
        embeddingType: 'UMAP',
        embeddingZoom: 'A',
        embeddingTargetX: 'A',
        embeddingTargetY: 'A',
      },
    },
    {
      component: 'heatmap',
      h: 4,
      w: 10,
      x: 0,
      y: 4,
      coordinationScopes: {
        geneExpressionColormapRange: 'A',
      },
    },
    {
      component: 'description',
      h: 4,
      w: 2,
      x: 10,
      y: 4,
      props: {
        description: `${satijaName}: ${satijaDescription}`,
      },
    },
  ],
};
