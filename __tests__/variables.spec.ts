import WFSerialization from '../src/interfaces/WF/WFSerialization';
import {
  askWhenRun,
  clipboard,
  currentDate,
  repeatItem,
  shortcutInput,
} from '../src/variables';

describe('askWhenRun global variable', () => {

  it('has Ask type', () => {
    const actual = askWhenRun;
    const expected: WFSerialization = {
      Value: {
        Type: 'Ask',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

});

describe('clipboard global variable', () => {

  it('has Clipboard type', () => {
    const actual = clipboard;
    const expected: WFSerialization = {
      Value: {
        Type: 'Clipboard',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

});

describe('currentDate global variable', () => {

  it('has CurrentDate type', () => {
    const actual = currentDate;
    const expected: WFSerialization = {
      Value: {
        Type: 'CurrentDate',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

});

describe('shortcutInput global variable', () => {

  it('has ExtensionInput type', () => {
    const actual = shortcutInput;
    const expected: WFSerialization = {
      Value: {
        Type: 'ExtensionInput',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

});

describe('repeatItem local variable', () => {
  it('has Repeat Item VariableName', () => {
    const actual = repeatItem();
    const expected: WFSerialization = {
      Value: {
        VariableName: 'Repeat Item',
        Type: 'Variable',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    expect(actual).toEqual(expected);
  });

});
