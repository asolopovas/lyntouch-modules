<?php

class TestHelpersClass extends WP_UnitTestCase
{

    /**
     * @test
     * @throws Exception
     */
    public function ratioReturnsCorrectHeightOrWidth()
    {
        $this->assertEquals(450, heightByRatio(300, 2/3));
        $this->assertEquals(200, heightByRatio(300, 3/2));
    }

}
