import { RutService } from './rut.service';

describe('RutService', () => {
  beforeEach(() => {
    addProviders([
      RutService,
    ]);
  });

  it('cleans rut', inject([RutService], (srv: RutService) => {
    expect(srv.cleanRut('A1234B')).toEqual('1234');
  }));
});
