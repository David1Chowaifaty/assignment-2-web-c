import { newSpecPage } from '@stencil/core/testing';
import { IrSelect } from '../ir-select';

describe('ir-select', () => {
  it('renders correctly with data', async () => {
    const page = await newSpecPage({
      components: [IrSelect],
      html: '<ir-select data="[{&quot;optgrouplabel&quot;:&quot;Alaskan/Hawaiian Time Zone&quot;,&quot;options&quot;:[{&quot;title&quot;:&quot;Alaska&quot;,&quot;value&quot;:&quot;AK&quot;},{&quot;title&quot;:&quot;Hawaii&quot;,&quot;value&quot;:&quot;HI&quot;}]},{&quot;optgrouplabel&quot;:&quot;Pacific Time Zone&quot;,&quot;options&quot;:[{&quot;title&quot;:&quot;California&quot;,&quot;value&quot;:&quot;CA&quot;},{&quot;title&quot;:&quot;Nevada&quot;,&quot;value&quot;:&quot;NV&quot;},{&quot;title&quot;:&quot;Oregon&quot;,&quot;value&quot;:&quot;OR&quot;},{&quot;title&quot;:&quot;WA&quot;,&quot;value&quot;:&quot;Washington&quot;}]},{&quot;optgrouplabel&quot;:&quot;Mountain Time Zone&quot;,&quot;options&quot;:[{&quot;title&quot;:&quot;Arizona&quot;,&quot;value&quot;:&quot;AZ&quot;},{&quot;title&quot;:&quot;Colorado&quot;,&quot;value&quot;:&quot;CO&quot;},{&quot;title&quot;:&quot;Idaho&quot;,&quot;value&quot;:&quot;ID&quot;},{&quot;title&quot;:&quot;Montana&quot;,&quot;value&quot;:&quot;MT&quot;},{&quot;title&quot;:&quot;Nebraska&quot;,&quot;value&quot;:&quot;NE&quot;},{&quot;title&quot;:&quot;New Mexica&quot;,&quot;value&quot;:&quot;NM&quot;},{&quot;title&quot;:&quot;North Dakota&quot;,&quot;value&quot;:&quot;ND&quot;},{&quot;title&quot;:&quot;Utah&quot;,&quot;value&quot;:&quot;UT&quot;},{&quot;title&quot;:&quot;Wyaoming&quot;,&quot;value&quot;:&quot;WY&quot;}]}]" select-title="Select an option"></ir-select>',
    });

    expect(page.root).toMatchSnapshot();
  });
  it('emits selectchange event on selection change', async () => {
    const page = await newSpecPage({
      components: [IrSelect],
      html: '<ir-select data="[{&quot;optgrouplabel&quot;:&quot;Alaskan/Hawaiian Time Zone&quot;,&quot;options&quot;:[{&quot;title&quot;:&quot;Alaska&quot;,&quot;value&quot;:&quot;AK&quot;},{&quot;title&quot;:&quot;Hawaii&quot;,&quot;value&quot;:&quot;HI&quot;}]},{&quot;optgrouplabel&quot;:&quot;Pacific Time Zone&quot;,&quot;options&quot;:[{&quot;title&quot;:&quot;California&quot;,&quot;value&quot;:&quot;CA&quot;},{&quot;title&quot;:&quot;Nevada&quot;,&quot;value&quot;:&quot;NV&quot;},{&quot;title&quot;:&quot;Oregon&quot;,&quot;value&quot;:&quot;OR&quot;},{&quot;title&quot;:&quot;WA&quot;,&quot;value&quot;:&quot;Washington&quot;}]},{&quot;optgrouplabel&quot;:&quot;Mountain Time Zone&quot;,&quot;options&quot;:[{&quot;title&quot;:&quot;Arizona&quot;,&quot;value&quot;:&quot;AZ&quot;},{&quot;title&quot;:&quot;Colorado&quot;,&quot;value&quot;:&quot;CO&quot;},{&quot;title&quot;:&quot;Idaho&quot;,&quot;value&quot;:&quot;ID&quot;},{&quot;title&quot;:&quot;Montana&quot;,&quot;value&quot;:&quot;MT&quot;},{&quot;title&quot;:&quot;Nebraska&quot;,&quot;value&quot;:&quot;NE&quot;},{&quot;title&quot;:&quot;New Mexica&quot;,&quot;value&quot;:&quot;NM&quot;},{&quot;title&quot;:&quot;North Dakota&quot;,&quot;value&quot;:&quot;ND&quot;},{&quot;title&quot;:&quot;Utah&quot;,&quot;value&quot;:&quot;UT&quot;},{&quot;title&quot;:&quot;Wyaoming&quot;,&quot;value&quot;:&quot;WY&quot;}]}]"></ir-select>',
    });
    const select = page.root.querySelector('select');
    const eventSpy = await page.waitForChanges();
    select.value = '2';
    select.dispatchEvent(new Event('change'));
    expect(eventSpy).toHaveReceivedEventDetail('2');
  });
});
