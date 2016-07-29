import { RutService } from './rut.service';
import { it, expect, describe, addProviders, inject, beforeEach} from '@angular/core/testing';

describe('RutService', () => {
  beforeEach(() => {
    addProviders([
      RutService,
    ]);
  });

  describe('cleanRut', () => {
    it('cleans rut', inject([RutService], (srv: RutService) => {
      expect(srv.cleanRut('A12&&*~34B')).toEqual('1234');
    }));
  });

  describe('validateRut', () => {
    it('returns true with valid rut', inject([RutService], (srv: RutService) => {
      expect(srv.validateRut('30972198')).toBe(true);
    }));

    it('returns false with valid rut', inject([RutService], (srv: RutService) => {
      expect(srv.validateRut('30972199')).toBe(false);
    }));
  });

  describe('formatRut', () => {
    it('formats rut', inject([RutService], (srv: RutService) => {
      expect(srv.formatRut('A30&&*~..97-2198B')).toEqual('3.097.219-8');
    }));
  });
});
