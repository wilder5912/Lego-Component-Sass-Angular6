import { BootstrapDesignerModule } from './bootstrap-designer.module';

describe('BootstrapDesignerModule', () => {
  let bootstrapDesignerModule: BootstrapDesignerModule;

  beforeEach(() => {
    bootstrapDesignerModule = new BootstrapDesignerModule();
  });

  it('should create an instance', () => {
    expect(bootstrapDesignerModule).toBeTruthy();
  });
});
