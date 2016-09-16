import { RutService } from './rut.service';
import { inject } from '@angular/core/testing';

describe('RutService', () => {
  let service: RutService;

  beforeEach(() => {
    service = new RutService();
  });

  describe('cleanRut', () => {
    it('cleans rut', () => {
      expect(service.cleanRut('A12&&*~34B')).toEqual('1234');
    });
  });

  describe('validateRut', () => {
    it('returns true with valid rut', () => {
      expect(service.validateRut('30972198')).toBe(true);
    });

    it('returns false with valid rut', () => {
      expect(service.validateRut('30972199')).toBe(false);
    });
  });

  describe('formatRut', () => {
    it('formats rut', () => {
      expect(service.formatRut('A30&&*~..97-2198B')).toEqual('3.097.219-8');
    });
  });
});
